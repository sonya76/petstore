import Sliders from "../components/Sliders";

export default function Home() {
  return (
    <>
      <div class="univers">
        <ul id="hadUnivres">
          <li>
            <a href="">
              <span class="icon-univers">
                <i class=" fa-solid fa-dog "></i>
              </span>
              <span class="text-univers">Chiens</span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="icon-univers">
                <i class=" fa-solid fa-cat"></i>
              </span>
              <span class="text-univers">Chats</span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="icon-univers">
                <i class="fa-solid fa-fish-fins"></i>
              </span>
              <span class="text-univers">Poissons</span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="icon-univers">
                <i class="fa-solid fa-dove"></i>
              </span>
              <span class="text-univers">Oiseaux</span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="icon-univers">
                <i class="fa-solid fa-dog"></i>
              </span>
              <span class="text-univers">Rongeurs </span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="icon-univers">
                <i class="fa-solid fa-worm"></i>
              </span>
              <span class="text-univers">Reptiles </span>
            </a>
          </li>
        </ul>
      </div>
      <Sliders />
    </>
  );
}
