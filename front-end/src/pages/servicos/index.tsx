import { canSSRServices } from "../../utils/canSSRSignServices";

export default function Services() {
  return (<></>)
}

export const getServerSideProps = canSSRServices(async () => {
  return {
    props: {}
  }
});
