import * as C from "./styles";
import { theme } from "../../styles/Theme";

import { FaSpinner} from 'react-icons/fa';

export default function Loading() {
  return (
    <C.Loading>
      <FaSpinner size={80} color={theme.colors.luckPoint} />
    </C.Loading>
  );
}