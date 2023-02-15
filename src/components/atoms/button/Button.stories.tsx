import Button from '@/components/atoms/button/Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ReactComponent as TestIcons } from '@/assets/test_icon.svg';
import mdx from '@/components/atoms/button/Button.mdx';

export default {
  title: 'design system/atoms/Button',
  decorators: [],
  component: Button,
  parameters: {
    componentSubtitle: 'ThanoSQL Button Components',
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    variant: {
      options: [
        'header_btn_style_01',
        'header_btn_style_02',
        'square_button_style_01',
        'square_button_style_02',
        'square_button_style_03',
        'round_button_style_01',
        'round_button_style_02',
        'icon_button_style_01',
        'icon_button_style_02',
      ],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const header_btn_style_01 = Template.bind({});
header_btn_style_01.args = {
  children: 'Console',
  variant: 'header_btn_style_01',
  size: 'md',
  onClick: action('buttonType: header_btn_style_01'),
};

export const header_btn_style_02 = Template.bind({});
header_btn_style_02.args = {
  children: 'Console',
  variant: 'header_btn_style_02',
  size: 'md',
  onClick: action('buttonType: header_btn_style_02'),
};

export const square_button_style_01 = Template.bind({});
square_button_style_01.args = {
  children: 'Console',
  variant: 'square_button_style_01',
  size: 'md',
  onClick: action('buttonType: square_button_style_01'),
};

export const square_button_style_02 = Template.bind({});
square_button_style_02.args = {
  children: 'Console',
  variant: 'square_button_style_02',
  size: 'md',
  onClick: action('buttonType: square_button_style_02'),
};

export const square_button_style_03 = Template.bind({});
square_button_style_03.args = {
  children: 'Console',
  variant: 'square_button_style_03',
  size: 'md',
  onClick: action('buttonType: square_button_style_03'),
};

export const round_button_style_01 = Template.bind({});
round_button_style_01.args = {
  children: 'Console',
  variant: 'round_button_style_01',
  size: 'md',
  onClick: action('buttonType: round_button_style_01'),
};

export const round_button_style_02 = Template.bind({});
round_button_style_02.args = {
  children: 'Console',
  variant: 'round_button_style_02',
  size: 'md',
  onClick: action('buttonType: round_button_style_02'),
};

export const icon_button_style_01 = Template.bind({});
icon_button_style_01.args = {
  children: <TestIcons />,
  variant: 'icon_button_style_01',
  size: 'singleIcon',
  onClick: action('buttonType: icon_button_style_01'),
};

export const icon_button_style_02 = Template.bind({});
icon_button_style_02.args = {
  children: `${(<TestIcons />)}`,
  variant: 'icon_button_style_02',
  size: 'md',
  onClick: action('buttonType: icon_button_style_02'),
};
