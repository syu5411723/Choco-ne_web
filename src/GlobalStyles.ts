import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }
    html,
    body{
        background-color: rgb(228, 253, 252);
        color: rgb(88, 60, 39);
        text-align: left;
        font-size: 2.93333vw;
        letter-spacing: 0.06rem;
        font-family: 游ゴシック体, YuGothic, 游ゴシック, "Yu Gothic", メイリオ, "Hiragino Kaku Gothic ProN", "Hiragino Sans", sans-serif;
        font-weight: 500;
        line-height: 1;
    }
    li{
        list-style:none;
    }
    
`