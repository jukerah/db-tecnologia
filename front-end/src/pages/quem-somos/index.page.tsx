import { canSSRAboutUs } from "../../utils/canSSRSignAboutUs";

export default function AboutUs() {
  return (<></>)
}

export const getServerSideProps = canSSRAboutUs(async () => {
  return {
    props: {}
  }
});
