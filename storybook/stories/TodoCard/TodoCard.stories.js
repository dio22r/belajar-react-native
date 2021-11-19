import {storiesOf} from '@storybook/react-native';
import React from 'react';
import TodoCard from './TodoCard';
import CenterView from '../CenterView';

storiesOf('TodoCard', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Unchecked', () => (
    <TodoCard completed={false} name="Short Text" color="black" />
  ))
  .add('short text', () => (
    <TodoCard completed={true} name="Short Text" color="black" />
  ))
  .add('long text', () => (
    <TodoCard
      completed={true}
      name="Long Text in StoryBook with React Native, its a great documentation."
      color="black"
    />
  ))
  .add('red unchecked', () => (
    <TodoCard completed={false} name="Short Text." color="red" />
  ))
  .add('red checked', () => (
    <TodoCard completed={true} name="Shor Text." color="red" />
  ));
