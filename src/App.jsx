import "./App.css";
import React from "react";
import { Nav } from "./components/Nav";
import { Headerr } from "./components/Header"
import { About } from "./components/About";
import { Buttons } from "./components/projects";
import { Home } from "./components/home";
import Contact from "./components/Contact";
import Projecthouses from "./components/projecthouses";
import CarsHomePage from "./components/carsHomePage";
import FilterButtons from "./components/FilterButtons";
import Data from "./components/Data";
import Productfilter, { CarList } from "./components/Productfilter";
import HomePage from "./components/HomePage";





function App() {
  let Component

  switch(window.location.pathname) {
    case "/":
      Component = Home
      break
      
      case "/About":
        Component = About 
        break

        case "/Projects":
        Component = Buttons
        break

        case "/Contact":
        Component = Contact
        break

        case "/Houses":
          Component = Projecthouses
          break

          case "/Cars":
          Component = CarsHomePage
          break

          case "/Cars2":
            Component = Productfilter
            break

            case "/HomePage":
              Component = HomePage
              break

        case "/WhoTube":
              Component = WhoTubeMainPage
              break

              case "/WhoTubeLogSign":
                Component = WhoTubeLogSign
                break

              case "/ClothesHome":
              Component = ClothingHome
              break

              case "/ClothesCheckout":
                Component = check123
                break

                case "/MensClothes":
                  Component = MensClothes
                  break

                  case "/WomensClothes":
                    Component = WomensClothes
                    break

                    case "/KidsClothes":
                      Component = KidsClothes
                      break

                      case "/BabyClothes":
                        Component = BabyClothes
                        break
      


  }
  return (
    <div className="App">
      

      
     
      <Component />

    


    </div>
  );
}

export default App;
