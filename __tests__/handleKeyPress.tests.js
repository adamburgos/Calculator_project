
// Test for the functionality of the handleKeyPress function
describe('handleKeyPress', () => {
    test('should call calculateResult when the enter key is pressed', () => {
      const calculateResult = jest.fn();
      const event = {
        key: 'Enter',
        preventDefault: jest.fn(),
      };
      handleKeyPress(event, calculateResult);
      expect(calculateResult).toHaveBeenCalled();
    });
  
  
    test('should not call calculateResult when a different key is pressed', () => {
      const calculateResult = jest.fn();
      const event = {
        key: 'a',
        preventDefault: jest.fn(),
      };
      handleKeyPress(event, calculateResult);
      expect(calculateResult).not.toHaveBeenCalled();
    });
  
    test('should call preventDefault when the enter key is pressed', () => {
      const calculateResult = jest.fn();
      const event = {
        key: 'Enter',
        preventDefault: jest.fn(),
      };
      handleKeyPress(event, calculateResult);
      expect(event.preventDefault).toHaveBeenCalled();
    });
  });