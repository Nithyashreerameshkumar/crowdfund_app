import './App.css';
import web3 from './web3';
import React,{useState,useRef, useEffect} from "react";
import {tokenaddress,ercabi} from './abi';
import {projectaddress,projectabi} from './abi';
function App(){
const[walletconnect,setwalletconnect] = useState("");
const[getrefund,setrefund]=useState("");
const ToptalToken  = new web3.eth.Contract(ercabi,tokenaddress);
const Project = new web3.eth.Contract(projectabi,projectaddress);
const connect = async()=>{
  let accounts=await web3.eth.getAccounts();
     //web3.eth.getChainId().then(console.log);
     //const networkid=await web3.eth.getChainId();
     // console.log("network id",networkid);
await web3.eth.getAccounts().then(()=>{          
          console.log("acc Ethereum",accounts[0]);
          setwalletconnect(accounts[0]);
          window.wallet=accounts[0];
         localStorage.setItem("wallet",accounts[0]);})}
         //sessionStorage.setItem("wallet", accounts[0]);

const contribute =async()=>{
  let value="1";
  const accounts=await web3.eth.getAccounts();
  await Project.methods.contribute().send({from:accounts[0],value:web3.utils.toWei(value,'ether')});
}
//await Launchpadcontract.methods.contribute().send({from:accounts[0],value: web3.utils.toWei(value, 'ether')}).
const getRefund=async()=>{
   const accounts=await web3.eth.getAccounts();
   await Project.methods.getRefund().send({from:accounts[0]});
}
  return (
    <div>
      
      {/* <header className="App-header">  */}
      <p>WALLET CONNECT:</p>
      <button onClick={()=>connect()}>connectwallet</button>
       <br/>
       <p>CONTRIBUTE:</p>
    <button onClick={()=>contribute()}>Contribute</button>&nbsp;&nbsp;&nbsp;
    <br/>
    <p>GET REFUND:</p>
    <button onClick={()=>getRefund()}>get refund</button>
    <br/>
    {/* </header> */}
    
    </div>
    );
  }
export default App;
