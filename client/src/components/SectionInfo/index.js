/* eslint-disable react/jsx-no-undef */
import { Button } from '../Buttons/ButtonElements';
import {
  Column2,
  Img,
  SectionInfoContainer,
  SectionInfoWrapper,
  SectionInfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ButtonWrapper,
  ImgWrap,
} from './SectionInfoElements';

const SectionInfo = ({
  lightBg,
  id,
  imgStart,
  topline,
  lightText,
  darkText,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <SectionInfoContainer lightBg={lightBg} id={id}>
        <SectionInfoWrapper>
          <SectionInfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topline}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <ButtonWrapper>
                  <Button
                    to={`${id}`}
                    smooth={'true'}
                    duration={500}
                    spy={'true'}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </ButtonWrapper>
              </TextWrapper>
            </Column1>

            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </SectionInfoRow>
        </SectionInfoWrapper>
      </SectionInfoContainer>
    </>
  );
};

export default SectionInfo;
