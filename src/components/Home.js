import React, { Component }  from 'react';
import { connect } from 'react-redux';
import Footer from './Footer';
import { fetchProjectList,setLoading } from '../actions';

import db from '../data/data';

import cImg from '../img/mc-c.png';
import webImg from '../img/mc-web.png';
import cloudImg from '../img/mc-cloud.png';
import reactImg from '../img/mc-react.jpg';
import sysImg from '../img/sys.svg';
import conf from '../config';


class Home extends Component {

  componentDidMount = () =>{
    this.props.getProjectList();
  }

  render() {  
    let {projectList}  = this.props;
    projectList = (typeof(projectList)==='undefined')?[]:projectList;

    projectList = db.project;
    let stList = db.student;
    let hostPre = conf.host + "img/";


    //console.log('project list: ' + projectList)

    return (
      <div className="g-home">
        <div className="m-cnt">
          <div className="m-cur">
            <div className="m-title">
              AI英語インタビューシステム
            </div>
            
            <div className="m-desc">
              <span>React && Redux 框架</span>
              <span>Tensorflow ディープラーニング アルゴリズム</span>
              <span>Google Word2Vex 算法</span>
              <span>XUNFEI音声認識システム</span>
            </div>
            <div className="m-pic">
              <img src={sysImg} alt=""/>
            </div>
          </div>

          <div className="m-proj">
            {projectList.map((item,i)=>{
              return(
                <div className="m-proj-item" key={i}>
                <span className="m-date">{item.date}</span>
                <span>{item.pname}</span>
              </div>
              )
            })}
          </div>

          <div className="m-mooc">
            <div className="m-mooc-item">
              <img src={cImg} alt=""/>
              <span>C プログラムデザイン</span>
            </div>
            <div className="m-mooc-item">
              <img src={webImg} alt=""/>
              <span>Web プログラムデザイン</span>
            </div>
            <div className="m-mooc-item">
              <img src={cloudImg} alt=""/>
              <span>クラウドコンピューティング技術</span>
            </div>
            <div className="m-mooc-item">
              <img src={reactImg} alt=""/>
              <span>タスク駆動型フロントエンドプログラミング</span>
            </div>
          </div>

          <div className="m-st">
            {stList.map((item,i)=>{
              return(
                <div className="m-st-item" key={i}>
                  <img src={hostPre+item.img} alt=""/>
                  <span>{item.name}</span>
                </div>
              )
            })}
          </div>
        </div>
        
        <Footer/>
      </div>
    )
  }
}




const mapStateToProps  = (state) => ({
  evaltask: state.evaltask,
  idx: state.idx, 
  projectList: state.projectList,
  loading: state.loading,
});

const mapDispatchToProps=(dispatch)=>{
  return {
    getProjectList: () => {
      dispatch( setLoading() );
      dispatch(fetchProjectList());
    },
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);

