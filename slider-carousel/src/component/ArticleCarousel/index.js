import React, { useState, useEffect } from 'react';
import { articleApiNews, articleApiEvents } from '../../api/article-api'
import './index.css';

export default function ArticleCousel() {
  useEffect(() => {
    const fetchData = async () => {
      const news = await articleApiNews();
      const events = await articleApiEvents();
      console.log(news);
      console.log(events);
    };

    fetchData();
  }, []);
  return <div>Article Counsel here..</div>
}