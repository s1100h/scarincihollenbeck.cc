import React, { Component } from 'react';


class CovidPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      articleTitle: ''
    };
  }

  async componentDidMount() {
    const covidUrl = 'covid-19-crisis-management-unit';
    const covidEdUrl = 'government-education-covid-19-response-team';
    const pathName = window.location.pathname;

    if (pathName.indexOf(covidUrl) > -1) {
      const response = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/wp/v2/posts?categories=20250&post_per_page=-1`);
      const posts = await response.json();
      this.setState({ posts, articleTitle: "COVID-19 Articles" });
    }

    if(pathName.indexOf(covidEdUrl) > -1) {
      const response = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/wp/v2/posts?categories=22896&post_per_page=-1`);
      const posts = await response.json();
      this.setState({ posts, articleTitle: "Education COVID-19 Articles" });
    }    
  }

  render() {
    const { posts, articleTitle } = this.state; 

    return (
      <div className="container">
       <div className="row">
         <div className="col-sm-12">
          <h3><strong style={{"font-size": "1.8rem"}}>{articleTitle}</strong></h3>
           <hr />
         </div>
       {(posts.length > 0) && posts.map((post) => (
         <div className="" key={post.id} className="col-sm-12 col-md-12 col-lg-6 my-3">
           <div className="card" id="covid-post">
            <img style={{"flexShrink": 0, "width": "100%"}} src={post.fimg_url} alt={post.title.rendered} />
              <div className="card-body text-center mt-2">
                <h5 className="card-title">{post.title.rendered}</h5>         
                <a href={post.link} style={{"color":"white"}} className="btn btn-danger mx-auto d-block w-50 mb-2">Full Article &gt;&gt;</a>
              </div>
           </div>
         </div>
       ))} 
       </div>
      </div>
    )
  }
};

export default CovidPosts;