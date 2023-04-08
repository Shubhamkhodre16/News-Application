import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
    static defaultProps={
       country: 'in',
       pazeSize:8,
       category: 'general '
  }
  static defaultProps={
    country: PropTypes.string,
    pazeSize:PropTypes.number, 
    category: PropTypes.string
}
    
    articles = []
        
    constructor(props){
        super(props);
        // console.log("Hello I am a constructor from News component");
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
        document.title = `${this.props.category}- NewsMonkey`;
    }
    async updateNews(){
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6e84a69cd3774c8b9f471fc7cfe78ab8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await  data.json();
        console.log(parsedData);
        this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,
          loading:false});

    }
    async componentDidMount (){
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6e84a69cd3774c8b9f471fc7cfe78ab8&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true});
        // let data = await fetch(url);
        // let parsedData = await  data.json();
        // console.log(parsedData);
        // this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,
        //   loading:false});
        this.updateNews();
    }
    handlePrevClick= async ()=>{
    //   console.log("Previous");
    //   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6e84a69cd3774c8b9f471fc7cfe78ab8&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading:true});  
    //   let data = await fetch(url);
    //     let parsedData = await  data.json();
    //     console.log(parsedData);
    //     this.setState({articles:parsedData.articles});

    //     this.setState({
    //       page:this.state.page -1,
    //       articles:parsedData.articles,
    //       loading:false
    //     })
    this.setState({page:this.state.page - 1});
    this.updateNews();
    }
    handleNxtClick=async ()=>{
      console.log("Next");
    
      // if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
    
      //   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6e84a69cd3774c8b9f471fc7cfe78ab8&page=${this.state.page+1}&pageSize=${this.props.pageSize}  `;
      //   this.setState({loading:true});
      //   let data = await fetch(url);
      //   let parsedData = await  data.json();

      //   this.setState({
      //     page:this.state.page+1,
      //     articles:parsedData.articles,
      //     loading:false
      //   })
      // }
      this.setState({page:this.state.page + 1});
      this.updateNews();
       }

  //  For Next button end point le-28 14min

  render()  {
    return (
      <div className='container my-3'>
        <h1 className='text-center my-3' >NewsMonkey - Top {this.props.category} Headlines</h1>
        {this.state.loading && <Spinner/>}

     <div className="row my-5" >

     {!this.state.loading && this.state.articles?.map((element)=>{
        return<div className="col-md-3 " key={element.url} >
        <NewsItem  title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""}  imageUrl = {element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />    </div>
     })}
                {/* <div className="col-md-3 " >
                    <NewsItem title="myTitle" description="mydesc"  imageUrl = "https://ichef.bbci.co.uk/news/1024/branded_news/8E97/production/_129230563_well2.jpg" newsUrl="Todo" />
                </div> */}

         </div>
         <div className="container d-flex justify-content-between" >
         <button disabled={this.state.page<=1} type="button" className="btn btn-dark mx-3"onClick={this.handlePrevClick} >&larr; Previous</button>
         <button disabled={this.state.page +1>Math.ceil(this.state.totalResults/this.props.pageSize) } type="button" className ="btn btn-dark" onClick={this.handleNxtClick} >Next &rarr; </button>

         </div>
        
      </div>
    )
  }
}


export default News
