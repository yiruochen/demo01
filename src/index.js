import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Apps from './Apps'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import propTypes from 'prop-types';
//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
var reactCreateClass=require('create-react-class');
var HelloMessage=reactCreateClass({
    render : function (){
        return <div>
            <h1>Hello {this.props.name}</h1>
            <p>some text</p>
        </div>

    }}


);
var HelloMessages=reactCreateClass({
    render : function (){
        return <div>
            <h1>Hello {this.props.name}</h1>
            <p>some text</p>
        </div>

    }}


);
var mystyle={
    fontsize:10,
    color:"#FF0000"
}
var arr=[
    <h1>hello</h1>,
    <h2>world</h2>

]

var WebSite=reactCreateClass({
    getInitialState:function () {
        return(
            {
                name: "pipipi",
                site: "http://www.baidu.com"
            });
    },
    render: function () {
        return(
          <div>
              <Name name={this.props.name}/>
              <Link site={this.props.site}/>
          </div>
        );
    }

});

var Name=reactCreateClass({
    render:function () {
        return(
            <h1>{this.props.name}</h1>
        );
    }
});

var Link=reactCreateClass({
    render:function () {
        return(
            <a href={this.props.site}>
                {this.props.site}
            </a>
        );
    }
});

var title="nuby";
var MyTitle=reactCreateClass({
    checkPropTypes: function(){
      hello:React.PropTypes.string.isRequired;
    },
    render:function(){
        return <h1>{this.props.hello}</h1>
    }
});
ReactDOM.render(


   <MyTitle hello={title}/>
    ,
    document.getElementById("root")
);

