import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

const meta = {
    title: 'MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    argTypes:{
        size:{ control: 'select' },
        fontColor:{ control: 'color'},
        color:{ control: 'select'}
    },
    parameters: {
        layout: 'centered'
    }
} satisfies Meta <typeof MyLabel>

export default meta;
type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args: {
        label: 'Basic Label',
        caps: false
    }
};
export const AllCaps: Story = {
    args: {
        label: 'All Caps Label',
        caps: true,
    }
};
export const Secondary: Story = {
    args: {
        label: 'Secondary Label',
        caps: false,
        color: 'text-secondary'
    }
};
export const CustomColor: Story = {
    args: {
        label: 'Custom Color Label',
        caps: false,
        fontColor: 'yellow'
    }
};