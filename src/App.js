import React, { useState } from 'react';
import { Workbook } from '@fortune-sheet/react';
import { 
  FluentProvider, 
  webLightTheme,
  Input,
  Button,
  Text,
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
} from '@fluentui/react-components';
import {
  SendRegular,
  BookRegular,
  MicRegular,
  DismissRegular,
} from '@fluentui/react-icons';
import '@fortune-sheet/react/dist/index.css';
import './App.css';
import './chatpane.css';

// ChatMessage component to display individual messages
const ChatMessage = ({ message, isUser }) => (
  <div className={`chat-message ${isUser ? 'user-message' : 'bot-message'}`}>
    <Text>{message}</Text>
  </div>
);

// ChatPane component
const ChatPane = ({ onSendMessage, messages }) => {
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      onSendMessage(inputText);
      setInputText('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="Chat-pane">
      <div className="Sidecar-header">
        <div className="Title">
          <img src={process.env.PUBLIC_URL + '/copiloticon.png'} alt="Copilot" className="Copilot-icon" />
          <div className="Title-text">
            <span className="Copilot">Copilot</span>
          </div>
        </div>
        <div className="Copilot-actions">
          <Button 
            icon={<DismissRegular />}
            appearance="transparent"
            className="dismiss-button"
          />
        </div>
      </div>

      <div className="Output-group">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg.text} isUser={msg.isUser} />
        ))}
      </div>

      <div className="Input">
        <div className="ChatInput">
          <Input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask a question..."
            className="Text-Input"
          />
          <div className="Footer">
            <div className="Buttons">
              <div className="Input-Actions">
                <Button
                  icon={<BookRegular />}
                  appearance="transparent"
                  className="prompt-guide"
                />
                <Button
                  icon={<MicRegular />}
                  appearance="transparent"
                  className="mic-button"
                />
                <Button
                  icon={<SendRegular />}
                  appearance="transparent"
                  className="send-button"
                  onClick={handleSend}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [messages, setMessages] = useState([]);
  const [data, setData] = useState([{
    name: "Sheet1",
    data: Array(100).fill().map(() => Array(100).fill('')),
    config: {},
    status: 1,
  }]);

  const getNonEmptyCells = (sheetData) => {
    const nonEmptyCells = [];
    const sheet = sheetData[0];
    
    if (sheet && sheet.data) {
      sheet.data.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
          if (cell !== null && cell !== '') {
            nonEmptyCells.push({
              row: rowIndex + 1,
              column: String.fromCharCode(65 + colIndex),
              value: cell
            });
          }
        });
      });
    }
    return nonEmptyCells;
  };

  const renderCellsTable = (cells) => {
    if (cells.length === 0) {
      return "No non-empty cells found in the spreadsheet.";
    }

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Cell</TableHeaderCell>
            <TableHeaderCell>Value</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cells.map((cell, index) => (
            <TableRow key={index}>
              <TableCell>{cell.column}{cell.row}</TableCell>
              <TableCell>{cell.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  const handleChatMessage = (message) => {
    setMessages(prev => [...prev, { text: message, isUser: true }]);
    
    const nonEmptyCells = getNonEmptyCells(data);
    setMessages(prev => [...prev, { 
      text: renderCellsTable(nonEmptyCells),
      isUser: false 
    }]);
  };

  return (
    <FluentProvider theme={webLightTheme}>
      <div className="App">
        <div className="app-container">
          <ChatPane onSendMessage={handleChatMessage} messages={messages} />
          <div className="spreadsheet-container">
            <Workbook 
              data={data}
              options={{
                showToolbar: true,
                showGrid: true,
                showFormulaBar: true,
              }}
            />
          </div>
        </div>
      </div>
    </FluentProvider>
  );
}

export default App;
