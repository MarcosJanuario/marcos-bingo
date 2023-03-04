import React from 'react';
import { render } from '@testing-library/react';
import DrawingContent from './DrawingContent';

describe('DrawingContent', () => {
  test('renders a content with class name drawing-content-wrapper ', () => {
    const { container } = render(<DrawingContent />);
    const drawingContent = container.getElementsByClassName('drawing-content-wrapper');
    expect(drawingContent.length).toBe(1);
  });
});
