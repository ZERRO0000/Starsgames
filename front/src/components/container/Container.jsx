import { useState, useEffect, useCallback } from "react";
import Form from "../form/Form.jsx";
import Table from "../table/Table.jsx"; 
import Index from '../index/Index.jsx';
import NewsList from "../lists/NewsList.jsx";
import RatingList from "../ratingList/RatingList.jsx";
import Swiper from "../swiper/Swiper.jsx";
import ChooseGame from "../choosing-game/Choosing-game.jsx";


export default function Container({ curPath, edit }) {
    const [row, setRow] = useState('');
    const [collectionName, setCollectionName] = useState(null);
    const [query, setQuery] = useState('');

    const handleUpdateRow = (value) => {
        if(value.data)
            setRow(value.data[0]);
    }

    const setCollection = useCallback(async () => {
        if(curPath!=='index' && curPath != null)
            setCollectionName(curPath);
    })

    useEffect(
        () => { 
            setCollection();
        }, [setCollection]
    )

    return ( 
        <div className={'container'}>   

            { collectionName === 'games' && <Swiper></Swiper> }

            { !collectionName && <Index></Index>}
            
            { curPath === 'games' && <NewsList collectionName={collectionName}></NewsList>}
            
            { collectionName != 'undefined' && curPath === 'rating' && <RatingList collectionName={collectionName}></RatingList>}

            { collectionName === 'game' && <ChooseGame></ChooseGame> }

            {
                edit === true && 
                    <>
                    {collectionName && <Form arValue={row} nameForm={ collectionName }></Form>}
                    {collectionName && <Table onChange={handleUpdateRow} nameTable={ collectionName } query={query}></Table>}
                    </>
            }

        </div>
    )
}