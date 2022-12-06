import { canSSRPortfolio } from "../../utils/canSSRSignPortfolio";

export default function Portfolio() {
  return (<></>)
}

export const getServerSideProps = canSSRPortfolio(async () => {
  return {
    props: {}
  }
});
