import { createGlobalStyle } from 'styled-components';

const NProgressStyles = createGlobalStyle`
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: linear-gradient(to left, #B8A14F, #49B983, #B8A14F);

    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;

    width: 100%;
    height: 2px;
  }

  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px #29d, 0 0 5px #29d;
    opacity: 1.0;

    -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
            transform: rotate(3deg) translate(0px, -4px);
  }

  #nprogress .spinner {
    display: flex;
    position: fixed;
    z-index: 999;
    top: calc(50% - 40px);
    right: calc(50% - 40px);
  }

  #nprogress .spinner-icon {
    width: 80px;
    height: 80px;
    box-sizing: border-box;

    border: solid 16px transparent;
    border-top-color: #1B1A70;
    border-left-color: #2F3B87;
    border-radius: 50%;

    animation: nprogress-spinner 400ms linear infinite;
  }

  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }

  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }

  @keyframes nprogress-spinner {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
 
export default NProgressStyles;