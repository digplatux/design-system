import PropTypes from 'prop-types';
import React from 'react';

const MedicaregovLogo = props => {
  return (
    <svg
      role="img"
      aria-labelledby="medicareLogo medicareLogoDesc"
      width={props.width || '273'}
      height={props.height || '39'}
      className={props.className}
      viewBox="0 0 273 39"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title id="medicareLogo">Medicare.gov</title>
      <desc id="medicareLogoDesc">Medicare.gov logo</desc>
      <path
        transform="translate(-25 -200)"
        fillRule="evenodd"
        d="M30.055 201.27h5.351l6.64 20.039 6.74-20.04h5.273L58.902 230H53.63l-3.086-18.145L44.43 230h-4.825l-6.035-18.145L30.426 230h-5.332l4.96-28.73zm53.925 19.648H66.852c.247 1.51.908 2.712 1.982 3.603 1.074.892 2.445 1.338 4.111 1.338 1.993 0 3.705-.696 5.137-2.09l4.492 2.11c-1.12 1.588-2.46 2.764-4.023 3.525-1.563.762-3.418 1.143-5.567 1.143-3.333 0-6.048-1.052-8.144-3.154-2.097-2.103-3.145-4.737-3.145-7.9 0-3.243 1.045-5.935 3.135-8.077 2.09-2.142 4.71-3.213 7.861-3.213 3.347 0 6.068 1.071 8.164 3.213 2.097 2.142 3.145 4.97 3.145 8.486l-.02 1.016zm-5.351-4.2c-.352-1.184-1.045-2.148-2.08-2.89-1.035-.742-2.236-1.113-3.604-1.113-1.484 0-2.786.417-3.906 1.25-.703.52-1.354 1.439-1.953 2.754h11.543zM104 200.548h5.313V230H104v-2.246c-1.042.99-2.087 1.702-3.135 2.139-1.048.436-2.184.654-3.408.654-2.747 0-5.124-1.065-7.129-3.193-2.005-2.13-3.008-4.776-3.008-7.94 0-3.281.97-5.97 2.91-8.066 1.94-2.097 4.297-3.145 7.07-3.145 1.277 0 2.475.241 3.595.723s2.154 1.204 3.105 2.168v-10.547zm-5.605 12.578c-1.654 0-3.028.583-4.122 1.748-1.093 1.165-1.64 2.66-1.64 4.482 0 1.836.556 3.347 1.67 4.532 1.113 1.185 2.483 1.777 4.111 1.777 1.68 0 3.073-.583 4.18-1.748 1.107-1.165 1.66-2.692 1.66-4.58 0-1.849-.553-3.346-1.66-4.492-1.107-1.146-2.507-1.719-4.2-1.719zM116.793 200c.937 0 1.742.339 2.412 1.016.67.677 1.006 1.497 1.006 2.46a3.33 3.33 0 0 1-.996 2.432c-.664.67-1.458 1.006-2.383 1.006-.95 0-1.761-.342-2.432-1.025-.67-.684-1.005-1.514-1.005-2.49 0-.938.332-1.739.996-2.403a3.274 3.274 0 0 1 2.402-.996zm-2.676 8.75h5.352V230h-5.352v-21.25zm30.977 4.297l-4.434 2.441c-.833-.872-1.657-1.478-2.47-1.816-.814-.339-1.768-.508-2.862-.508-1.992 0-3.603.596-4.834 1.787-1.23 1.192-1.846 2.718-1.846 4.58 0 1.81.593 3.288 1.778 4.434 1.185 1.146 2.74 1.719 4.668 1.719 2.383 0 4.238-.814 5.566-2.442l4.2 2.871c-2.28 2.956-5.495 4.434-9.65 4.434-3.736 0-6.662-1.107-8.778-3.32-2.116-2.214-3.174-4.805-3.174-7.774 0-2.057.514-3.952 1.543-5.683 1.028-1.732 2.464-3.093 4.306-4.083 1.843-.99 3.903-1.484 6.182-1.484 2.11 0 4.004.42 5.684 1.26 1.68.84 3.053 2.034 4.12 3.584zm20.508-4.297h5.312V230h-5.312v-2.246c-1.042.99-2.087 1.702-3.135 2.139-1.048.436-2.184.654-3.408.654-2.748 0-5.124-1.065-7.13-3.193-2.005-2.13-3.007-4.776-3.007-7.94 0-3.281.97-5.97 2.91-8.066 1.94-2.097 4.297-3.145 7.07-3.145 1.276 0 2.474.241 3.594.723 1.12.482 2.155 1.204 3.106 2.168v-2.344zm-5.606 4.375c-1.654 0-3.027.583-4.121 1.748-1.094 1.165-1.64 2.66-1.64 4.482 0 1.836.556 3.347 1.67 4.532 1.113 1.185 2.483 1.777 4.11 1.777 1.68 0 3.074-.583 4.18-1.748 1.107-1.165 1.66-2.692 1.66-4.58 0-1.849-.553-3.346-1.66-4.492-1.106-1.146-2.506-1.719-4.199-1.719zm15.059-4.375h4.57v2.676c.495-1.055 1.152-1.856 1.973-2.403a4.76 4.76 0 0 1 2.695-.82c.69 0 1.413.182 2.168.547l-1.66 4.59c-.625-.313-1.14-.469-1.543-.469-.82 0-1.514.508-2.08 1.524-.567 1.015-.85 3.007-.85 5.976l.02 1.035V230h-5.293v-21.25zm35.332 12.168h-17.13c.248 1.51.909 2.712 1.983 3.603 1.074.892 2.445 1.338 4.112 1.338 1.992 0 3.704-.696 5.136-2.09l4.492 2.11c-1.12 1.588-2.46 2.764-4.023 3.525-1.562.762-3.418 1.143-5.566 1.143-3.334 0-6.049-1.052-8.145-3.154-2.096-2.103-3.144-4.737-3.144-7.9 0-3.243 1.044-5.935 3.134-8.077 2.09-2.142 4.71-3.213 7.862-3.213 3.346 0 6.067 1.071 8.164 3.213 2.096 2.142 3.144 4.97 3.144 8.486l-.02 1.016zm-5.352-4.2c-.351-1.184-1.045-2.148-2.08-2.89-1.035-.742-2.236-1.113-3.603-1.113-1.485 0-2.787.417-3.907 1.25-.703.52-1.354 1.439-1.953 2.754h11.543zm13.028 8.985c.664 0 1.23.234 1.699.703.468.469.703 1.042.703 1.719 0 .664-.235 1.234-.703 1.709a2.3 2.3 0 0 1-1.7.713 2.3 2.3 0 0 1-1.699-.713 2.347 2.347 0 0 1-.703-1.709c0-.677.235-1.25.703-1.719a2.315 2.315 0 0 1 1.7-.703zm26.367-16.953h2.754v16.934c0 2.981-.26 5.162-.782 6.543-.716 1.953-1.96 3.457-3.73 4.511-1.771 1.055-3.9 1.582-6.387 1.582-1.823 0-3.46-.257-4.912-.771s-2.633-1.205-3.545-2.07c-.911-.866-1.751-2.133-2.52-3.8h2.97c.807 1.407 1.848 2.449 3.124 3.126s2.858 1.015 4.746 1.015c1.862 0 3.435-.348 4.717-1.045 1.283-.696 2.197-1.572 2.744-2.627.547-1.054.82-2.753.82-5.097v-1.094a10.35 10.35 0 0 1-3.769 2.998 10.99 10.99 0 0 1-4.726 1.045 11.03 11.03 0 0 1-5.508-1.455c-1.719-.97-3.047-2.275-3.985-3.916-.937-1.64-1.406-3.444-1.406-5.41 0-1.966.488-3.8 1.465-5.498a10.761 10.761 0 0 1 4.053-4.034c1.725-.99 3.545-1.484 5.459-1.484 1.588 0 3.07.329 4.443.986 1.374.658 2.699 1.742 3.975 3.252v-3.691zm-8.067 2.09c-1.55 0-2.988.374-4.316 1.123a8.137 8.137 0 0 0-3.125 3.105 8.496 8.496 0 0 0-1.133 4.287c0 2.331.781 4.258 2.344 5.782 1.562 1.523 3.587 2.285 6.074 2.285 2.513 0 4.535-.755 6.064-2.266 1.53-1.51 2.295-3.496 2.295-5.957 0-1.601-.351-3.03-1.054-4.287-.703-1.256-1.7-2.25-2.989-2.978a8.312 8.312 0 0 0-4.16-1.094zm26.739-2.637c3.268 0 5.976 1.185 8.125 3.555 1.953 2.161 2.93 4.72 2.93 7.676 0 2.968-1.033 5.563-3.096 7.783-2.064 2.22-4.717 3.33-7.96 3.33-3.255 0-5.914-1.11-7.978-3.33-2.064-2.22-3.096-4.815-3.096-7.783 0-2.943.977-5.495 2.93-7.657 2.148-2.382 4.863-3.574 8.145-3.574zm0 2.676c-2.266 0-4.213.84-5.84 2.52-1.628 1.68-2.442 3.71-2.442 6.093 0 1.537.371 2.969 1.114 4.297.742 1.328 1.744 2.354 3.007 3.076 1.263.723 2.65 1.084 4.16 1.084 1.511 0 2.898-.361 4.16-1.084 1.264-.722 2.266-1.748 3.009-3.076a8.666 8.666 0 0 0 1.113-4.297c0-2.383-.817-4.414-2.451-6.094-1.634-1.68-3.578-2.52-5.83-2.52zm14.12-2.129h2.91l7.11 15.469 7.051-15.469h2.93L287.496 230h-.488l-9.785-21.25z"
      />
    </svg>
  );
};

export default MedicaregovLogo;
