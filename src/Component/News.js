import './News.css'
import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from "axios";
import contextimg from '../Image/myicon.png'

import NewsCard from '../Component/NewsCard'

const News = () => {
  const [mynews, setmynews] = useState([]);
  useEffect(() => {
    axios.request(options).then(function (response) {
      setmynews(response.data.value);
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);
  console.log(mynews.value);
  const options = {
        method: 'GET',
        url: 'https://bing-news-search1.p.rapidapi.com/news',
        params: {safeSearch: 'Off', textFormat: 'Raw',mkt:'en-IN',category :'Business'},
        headers: {
          'X-BingApis-SDK': 'true',
          'X-RapidAPI-Key': '24e9ae7ea2msh0b9d124aef19e9ap1e92fcjsn7d9ee288a56e',
          'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
      };
  return (
    <div className="cont-news">
      <div className="header-news">
        <h1>LATEST MARKET NEWS</h1>
        <div className="lineu"></div>
      </div>
      <div className="news-box">
        {
          mynews?.map((item,i) => {
            return (
              < NewsCard
                key={i}
                title={item.name}
                description={item.description}
                datePublished={item.datePublished}
                name={item.provider[0]?.name}
                imgx={item?.image?.thumbnail?.contentUrl} 
                icon={item.provider[0]?.image?.thumbnail?.contentUrl || contextimg}
              />
            )
          })
        }
      </div>

    </div>
  )
}

export default News
