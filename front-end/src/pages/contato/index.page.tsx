import { canSSRContact } from "../../utils/canSSRSignContact";

export default function Contact() {
  return (<></>)
}

export const getServerSideProps = canSSRContact(async () => {
  return {
    props: {}
  }
});
