import React from 'react';
import chatIcon from '../../assets/send-symbol.svg';
import sendIcon from '../../assets/send-symbol.svg';

const SearchBox = () => {
  return (
    <div style={styles.frameParent}>
      <div style={styles.chatContainer}>
        <img
          src={chatIcon}
          alt="chat icon"
          style={styles.chatIcon}
        />
        <div style={styles.text}>어떤 카페를 찾고 계신가요?</div>
      </div>
      <img
        src={sendIcon}
        alt="send icon"
        style={styles.sendIcon}
      />
    </div>
  );
};

const styles = {
  frameParent: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#d8e4da',
    height: 67,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '14px 18px 8px',
    boxSizing: 'border-box',
    fontSize: 15,
    color: '#5e5e5e',
    fontFamily: 'Inter',
    textAlign: 'center',
  },
  chatContainer: {
    width: 177,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
  },
  chatIcon: {
    width: 24,
    maxHeight: '100%',
    overflow: 'hidden',
    flexShrink: 0,
  },
  text: {
    position: 'relative',
  },
  sendIcon: {
    width: 20,
    maxHeight: '100%',
    overflow: 'hidden',
    flexShrink: 0,
  },
};

export default SearchBox;
