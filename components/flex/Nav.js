import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Nav = () => (
  <div>
    <ul>
       <li>
            <Link href="/">
                <a style={linkStyle}>Home</a>
            </Link>
        </li>

        <li>
            <Link href="/components/header/index">
            <a style={linkStyle}>header</a>
            </Link>
        </li>

        <li>
            <Link href="/components/footer/index">
            <a style={linkStyle}>footer</a>
            </Link>
        </li>
    </ul>  
  </div>
);

export default Nav;