import PropTypes from "prop-types";
import * as S from "./styles";

export default function Header({ title }) {
  return (
    <S.HeaderContainer>
      <S.HeaderTitle>{title}</S.HeaderTitle>
    </S.HeaderContainer>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
