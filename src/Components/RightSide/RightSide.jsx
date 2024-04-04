import Article from "../Article/Article";
import Clamber from "../Clamber/Clamber";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Screen from "../Screen/Screen";
import Templates from "../Templates/Templates";

 

export default function RightSide() {
  return (
    <>
     <Header></Header>
     <Clamber></Clamber>
     <Templates></Templates>
     <Article></Article>
     <Screen></Screen>
     <Footer></Footer>
    </>
  )
}
