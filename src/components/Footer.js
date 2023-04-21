import igikon from "../images/ig.png";
import fbikon from "../images/fb.png";
import inikon from "../images/in.png";
import trustpilot from "../images/trustpilot.png";

export default function Footer() {
  return (
    <footer>
      <div>
        <p className="white">
          <b>Kontaktinformationer</b>
        </p>
        <p className="white">Blomstervænget 4, 8000 Aarhus</p>
        <p className="white">kontakt@reboot.dk</p>
        <p className="white">+45 12 34 56 87</p>
      </div>

      <div>
        <p className="white">
          <b>Det med småt</b>
        </p>
        <p className="white">Vilkår & Betingelser</p>
        <p className="white">Privatlivspolitik</p>
        <p className="white">Reboot. All rights reserved.</p>
      </div>

      <div>
        <p className="white">
          <b>SoMe</b>
        </p>
        <svg
          className="someikon"
          xmlns="http://www.w3.org/2000/svg"
          width="42.521"
          height="40.545"
          viewBox="0 0 42.521 40.545"
        >
          <g
            id="Icon_feather-linkedin"
            data-name="Icon feather-linkedin"
            transform="translate(-1.5 -1.5)"
          >
            <path
              id="Path_518"
              data-name="Path 518"
              d="M26.856,12A11.856,11.856,0,0,1,38.713,23.856V37.689h-7.9V23.856a3.952,3.952,0,0,0-7.9,0V37.689H15V23.856A11.856,11.856,0,0,1,26.856,12Z"
              transform="translate(3.808 2.856)"
              fill="none"
              stroke="#f8efe6"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
            />
            <path
              id="Path_519"
              data-name="Path 519"
              d="M3,13.5h7.9V37.213H3Z"
              transform="translate(0 3.332)"
              fill="none"
              stroke="#f8efe6"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
            />
            <path
              id="Path_520"
              data-name="Path 520"
              d="M10.9,6.952A3.952,3.952,0,1,1,6.952,3,3.952,3.952,0,0,1,10.9,6.952Z"
              fill="none"
              stroke="#f8efe6"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
            />
          </g>
        </svg>

        <svg
          class="someikon"
          xmlns="http://www.w3.org/2000/svg"
          width="42.764"
          height="42.755"
          viewBox="0 0 42.764 42.755"
        >
          <path
            id="Icon_awesome-instagram"
            data-name="Icon awesome-instagram"
            d="M21.382,12.653A10.962,10.962,0,1,0,32.343,23.615,10.944,10.944,0,0,0,21.382,12.653Zm0,18.088a7.127,7.127,0,1,1,7.127-7.127,7.139,7.139,0,0,1-7.127,7.127ZM35.348,12.2a2.557,2.557,0,1,1-2.557-2.557A2.551,2.551,0,0,1,35.348,12.2Zm7.26,2.595c-.162-3.425-.944-6.459-3.454-8.958S33.622,2.56,30.2,2.388c-3.53-.2-14.11-.2-17.64,0C9.141,2.55,6.108,3.332,3.6,5.832S.317,11.365.145,14.79c-.2,3.53-.2,14.11,0,17.64.162,3.425.944,6.459,3.454,8.958s5.533,3.282,8.958,3.454c3.53.2,14.11.2,17.64,0,3.425-.162,6.459-.944,8.958-3.454s3.282-5.533,3.454-8.958c.2-3.53.2-14.1,0-17.63Zm-4.56,21.418a7.215,7.215,0,0,1-4.064,4.064c-2.814,1.116-9.493.859-12.6.859s-9.8.248-12.6-.859a7.215,7.215,0,0,1-4.064-4.064c-1.116-2.814-.859-9.493-.859-12.6s-.248-9.8.859-12.6A7.215,7.215,0,0,1,8.779,6.948c2.814-1.116,9.493-.859,12.6-.859s9.8-.248,12.6.859a7.215,7.215,0,0,1,4.064,4.064c1.116,2.814.859,9.493.859,12.6S39.164,33.413,38.048,36.218Z"
            transform="translate(0.005 -2.237)"
            fill="#f8efe6"
          />
        </svg>

        <svg
          class="someikon"
          xmlns="http://www.w3.org/2000/svg"
          width="28.805"
          height="40.545"
          viewBox="0 0 28.805 40.545"
        >
          <path
            id="Icon_feather-facebook"
            data-name="Icon feather-facebook"
            d="M36.3,3H29.267c-6.478,0-11.73,4.2-11.73,9.386v5.632H10.5v7.509h7.038V40.544h9.384V25.527h7.038L36.3,18.018H26.921V12.386a2.151,2.151,0,0,1,2.346-1.877H36.3Z"
            transform="translate(-9 -1.5)"
            fill="none"
            stroke="#f8efe6"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
          />
        </svg>
      </div>

      <div>
        <img
          src={trustpilot}
          alt="trustpilot ikon"
          className="trustpilotikon"
        />
      </div>
    </footer>
  );
}
