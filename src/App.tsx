import Button from '@/components/atoms/button/Button';
import colors from '@/styles/colors';
import { flexCenterColumn, flexStartRow } from '@/styles/flex';
import styled from '@emotion/styled';
import { ReactComponent as TestIcons } from '@/assets/test_icon.svg';
function App() {
  return (
    <Box>
      <Content>
        <h1 style={{ marginRight: '2rem' }}>Header Button</h1>
        <Button size='md' variant='header_btn_style_01' margin='0 2rem 0 0'>
          Button
        </Button>
        <Button size='md' variant='header_btn_style_02' margin='0 2rem 0 0'>
          Button
        </Button>
        <Button size='md' variant='header_btn_style_02' disabled>
          Button
        </Button>
      </Content>
      <TestIcons />
      <Content>
        <h1 style={{ marginRight: '2rem' }}>Square Button</h1>
        <Button size='md' variant='square_button_style_01' margin='0 2rem 0 0'>
          Button
        </Button>
        <Button size='md' variant='square_button_style_02' margin='0 2rem 0 0'>
          Button
        </Button>
        <Button size='md' variant='square_button_style_03' margin='0 2rem 0 0'>
          Button
        </Button>
        <Button size='md' variant='square_button_style_03' margin='0 2rem 0 0' disabled>
          Button
        </Button>
      </Content>

      <Content>
        <h1 style={{ marginRight: '2rem' }}>Round Button</h1>
        <Button size='md' variant='round_button_style_01' margin='0 2rem 0 0'>
          Button
        </Button>
        <Button size='md' variant='round_button_style_02' margin='0 2rem 0 0'>
          Button
        </Button>
        <Button size='md' variant='round_button_style_02' margin='0 2rem 0 0' disabled>
          Button
        </Button>
      </Content>
    </Box>
  );
}

export default App;

const Box = styled.div`
  width: 100%;
  height: 100vh;
  background: ${colors.backgroundColors.background_01};
  ${flexCenterColumn}
`;

const Content = styled.div`
  width: 50rem;
  color: #252525;
  font-weight: bold;
  margin: 1.5rem 0;
  ${flexStartRow}
`;
