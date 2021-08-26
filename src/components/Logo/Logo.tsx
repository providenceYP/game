import React from 'react';
import { Link } from 'react-router-dom';

import './Logo.css';

export const Logo: React.FC = (): JSX.Element => (
  <Link className="logo" to="/">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M.445 15V.781h4.873c1.608 0 2.832.323 3.672.967.84.645 1.26 1.605 1.26 2.88a3.07 3.07 0 01-.527 1.759c-.352.52-.866.924-1.543 1.21.768.209 1.36.603 1.777 1.182.423.573.635 1.263.635 2.07 0 1.335-.43 2.36-1.29 3.077C8.45 14.642 7.227 15 5.632 15H.445zm2.471-6.416v4.443H5.66c.775 0 1.38-.192 1.817-.576.436-.384.654-.918.654-1.601 0-1.478-.755-2.233-2.266-2.266H2.916zm0-1.816h2.422c.768 0 1.367-.173 1.797-.518.436-.352.654-.846.654-1.484 0-.704-.202-1.211-.605-1.524-.398-.312-1.02-.469-1.866-.469H2.916v3.995zM19.296 15c-.104-.202-.195-.53-.273-.986-.755.787-1.68 1.181-2.773 1.181-1.062 0-1.928-.302-2.598-.908-.67-.605-1.006-1.354-1.006-2.246 0-1.126.417-1.989 1.25-2.588.84-.605 2.038-.908 3.594-.908h1.455v-.693c0-.547-.153-.984-.46-1.309-.305-.332-.77-.498-1.395-.498-.54 0-.984.137-1.329.41-.345.267-.517.609-.517 1.025H12.87c0-.579.192-1.12.576-1.62.384-.508.905-.906 1.562-1.192.664-.286 1.403-.43 2.217-.43 1.237 0 2.224.313 2.96.938.735.618 1.112 1.49 1.132 2.617v4.766c0 .95.133 1.709.4 2.275V15h-2.421zm-2.607-1.709c.469 0 .908-.114 1.318-.342.417-.228.73-.534.938-.918V10.04h-1.28c-.878 0-1.54.153-1.982.459-.442.306-.664.739-.664 1.299 0 .456.15.82.45 1.094.305.267.712.4 1.22.4zM26.927 1.865v2.569h1.865V6.19h-1.865v5.899c0 .403.078.697.234.879.163.176.45.263.86.263.273 0 .55-.032.83-.097v1.836c-.54.15-1.061.224-1.563.224-1.823 0-2.734-1.005-2.734-3.017V6.19h-1.738V4.434h1.738V1.865h2.373zm6.81 0v2.569h1.865V6.19h-1.865v5.899c0 .403.078.697.234.879.163.176.45.263.86.263.273 0 .55-.032.83-.097v1.836c-.54.15-1.061.224-1.563.224-1.822 0-2.734-1.005-2.734-3.017V6.19h-1.738V4.434h1.738V1.865h2.373zM40.098 15h-2.373V0h2.373v15zm7.396.195c-1.504 0-2.724-.472-3.662-1.416-.931-.95-1.397-2.213-1.397-3.789v-.293c0-1.054.202-1.995.606-2.822.41-.833.983-1.481 1.719-1.943a4.53 4.53 0 012.46-.694c1.44 0 2.55.46 3.33 1.377.789.918 1.182 2.217 1.182 3.897v.957h-6.904c.072.872.361 1.562.87 2.07.514.508 1.158.762 1.933.762 1.087 0 1.972-.44 2.656-1.319l1.28 1.221a4.301 4.301 0 01-1.7 1.475c-.703.345-1.494.517-2.373.517zm-.283-9.052c-.651 0-1.178.227-1.582.683-.397.456-.651 1.09-.762 1.904h4.522v-.175c-.052-.795-.264-1.394-.635-1.797-.371-.41-.886-.615-1.543-.615zM.445 31V16.781h4.2c1.256 0 2.37.28 3.34.84a5.718 5.718 0 012.265 2.383c.534 1.029.8 2.207.8 3.535v.713c0 1.348-.27 2.533-.81 3.555a5.619 5.619 0 01-2.295 2.363c-.99.553-2.125.83-3.408.83H.445zm2.471-12.227v10.254h1.611c1.296 0 2.289-.403 2.979-1.21.696-.814 1.051-1.98 1.064-3.497v-.79c0-1.544-.335-2.722-1.006-3.536-.67-.814-1.643-1.22-2.92-1.22H2.917zM15.956 31h-2.372V20.434h2.373V31zm-2.519-13.31c0-.365.114-.668.342-.909.234-.24.566-.361.996-.361.43 0 .762.12.996.361.235.241.352.544.352.909 0 .357-.117.657-.352.898-.234.234-.566.351-.996.351-.43 0-.762-.117-.996-.351a1.257 1.257 0 01-.342-.899zM23.04 29.3c.593 0 1.084-.172 1.475-.517.39-.345.599-.771.625-1.28h2.236a3.51 3.51 0 01-.615 1.847 4.051 4.051 0 01-1.563 1.347 4.657 4.657 0 01-2.128.498c-1.478 0-2.65-.478-3.516-1.435-.866-.957-1.299-2.279-1.299-3.965v-.244c0-1.608.43-2.894 1.29-3.858.858-.97 2.03-1.455 3.515-1.455 1.256 0 2.278.368 3.066 1.104.794.729 1.211 1.69 1.25 2.88H25.14c-.026-.605-.235-1.103-.625-1.494-.384-.39-.876-.585-1.475-.585-.768 0-1.36.28-1.777.84-.417.553-.628 1.396-.635 2.529v.38c0 1.146.205 2.003.615 2.569.417.56 1.016.84 1.797.84zm10.931 1.895c-1.503 0-2.724-.472-3.662-1.416-.93-.95-1.396-2.213-1.396-3.789v-.293c0-1.054.202-1.995.605-2.822.41-.833.983-1.481 1.72-1.943a4.531 4.531 0 012.46-.694c1.439 0 2.549.46 3.33 1.377.788.918 1.182 2.217 1.182 3.897v.957h-6.905c.072.872.362 1.562.87 2.07.514.508 1.159.762 1.933.762 1.087 0 1.973-.44 2.657-1.319l1.279 1.221a4.3 4.3 0 01-1.7 1.475c-.703.345-1.494.517-2.373.517zm-.283-9.052c-.65 0-1.178.227-1.582.683-.397.456-.65 1.09-.762 1.904h4.522v-.175c-.052-.795-.264-1.393-.635-1.797-.37-.41-.885-.615-1.543-.615z"
        fill="#000"
      />
      <path d="M43 30.7h10v-10H43v10z" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0" transform="scale(.01563)" />
        </pattern>
        <image
          id="image0"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  </Link>
);
