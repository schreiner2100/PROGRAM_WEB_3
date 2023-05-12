import style from "./Home.module.css";
import { CardPerson } from "../User/CardPerson";
import { CardContato } from "../Contato/CardContatos";
import {BsFillTrash3Fill } from "react-icons/bs";
import {IoPencil, IoSearchOutline, IoAdd } from "react-icons/io5";
export function Home() {

  
  return (
    <div className={style.container}>

      <CardPerson
    cover="https://i.pinimg.com/564x/8a/b7/4a/8ab74adbe0ba61c88fbe309aac231d63.jpg"
    avatar="https://i.pinimg.com/564x/14/7d/39/147d3900533dac86aea8621b140e92db.jpg"
    name="Lucas Rocha Schreiner"
    office= 'Suntec Engenharia'/>

<div className={style.contatos}>
<div  className={style.controles}>
  <form >
      
            <div className={style.headerContatos}>
            <h1 className={style.title}>Contatos</h1>
              <div  className={style.buttons}>
              <button  className={style.buttom}> <IoAdd /> </button>
              <button  className={style.buttom}> <IoPencil /> </button>
              <button  className={style.buttom}> <BsFillTrash3Fill /> </button>
            </div>
            </div>
            
            <div className={style.pesquisa}>
            <button  className={style.buttomPesquisa}> <IoSearchOutline /> </button>
            <input type='text' name='pesquisa' className={style.inputPesquisa}/>
            </div>
            
            </form>
        </div>

<div className={style.listaContatos}>

<div className={style.listaCatalogo}>
  <h1 className={style.letraCatalogo}>A</h1>
  <div className={style.contatoCatalogo}>
    <CardContato
    avatar="https://randomuser.me/api/portraits/men/27.jpg"
    name="Amenagiel"
    numero= '(12) 34567-8910'/>
    <CardContato
    avatar="https://uploads.metropoles.com/wp-content/uploads/2020/06/05100506/anitta95.jpg"
    name="Anitta"
    numero= '(12) 34567-8910'/>
  </div> 
</div>

<div className={style.listaCatalogo}>
  <h1 className={style.letraCatalogo}>J</h1>
  <div className={style.contatoCatalogo}>
    <CardContato
    avatar="https://randomuser.me/api/portraits/women/17.jpg"
    name="Nikko Nikko Ni"
    numero= '(12) 34567-8910'/>
  </div>
</div>
    

    </div>
    </div>
</div>    
  );
}