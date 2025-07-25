import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className='body'>
      <div className='mobile'>
        <h1 className='title'>Hamster Kombat</h1>
        <div className='btn-group'>
          <div className='btn1'>
            <h5>Earn per tap</h5>
            <div>
              <img src='/coin.svg' alt='' />
              <span>+12</span>
            </div>
          </div>

          <div className='btn1'>
            <h5>Earn per tap</h5>
            <div>
              <img src='/coin.svg' alt='' />
              <span>+12</span>
            </div>
          </div>

          <div className='btn1'>
            <h5>Earn per tap</h5>
            <div>
              <img src='/coin.svg' alt='' />
              <span>+12</span>
            </div>
          </div>
        </div>

        <div className='coin-tap'>
          <img src='/coin.svg' alt='' />
          <h2>{count}</h2>
        </div>

        <div className='hamster'>
          <Tilt>
            <img onClick={handleClick} src='/1.svg' alt='' />
          </Tilt>
        </div>

        <div className='boost'>
          <div className='boost-left'>
            <img src='/flash.svg' alt='' />
            <span>6500/6500</span>
          </div>

          <div className='boost-right'>Boost</div>
        </div>

        <div className='menu'>
          <button className='btn'>
            <img src='/betcoin.svg' alt='' />
            <span>Exchange</span>
          </button>

          <button className='btn'>
            <img src='/chopqi.svg' alt='' />
            <span>Mine</span>
          </button>

          <button className='btn'>
            <img src='/humans.svg' alt='' />
            <span>Friends</span>
          </button>

          <button className='btn'>
            <img src='/coins.svg' alt='' />
            <span>Earn</span>
          </button>

          <button className='btn'>
            <img src='/hamster.svg' alt='' />
            <span>Airdrop</span>
          </button>
        </div>
      </div>
    </div>
  );
}
