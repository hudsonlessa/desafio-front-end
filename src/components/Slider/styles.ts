import styled from 'styled-components';

interface ContainerProps {
  activeSlide: number;
}

export const Container = styled.section<ContainerProps>`
  height: 500px;

  .slider {
    position: relative;
    height: 100%;

    .arrow {
      width: 32px;
      height: 48px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;

      @media (min-width: 768px) {
        width: 52.27px;
        height: 72px;
      }

      &--left {
        left: 20px;
      }

      &--right {
        right: 20px;
        transform: translateY(-50%) rotate(180deg);
      }
    }

    .slides {
      display: flex;
      height: 100%;
      overflow: hidden;

      scroll-behavior: smooth;
      scroll-snap-type: x mandatory;

      .slide {
        scroll-snap-align: start;
      }
    }

    .slide,
    img {
      width: 100vw;
      height: 100%;
    }

    img {
      object-fit: cover;
    }

    .slider__selectors {
      display: flex;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 33px;

      .selector {
        width: 20.77px;
        height: 21px;
        background: #fff;
        border: 3px solid #000;
        cursor: pointer;

        &:nth-of-type(${props => props.activeSlide}) {
          border-color: var(--primary-color);
        }

        + .selector {
          margin-left: 15px;
        }
      }
    }
  }
`;
