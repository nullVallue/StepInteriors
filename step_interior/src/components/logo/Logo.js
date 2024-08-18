export default function Logo({color="#000", size = '15'}){
    return (
        <svg width={size} viewBox="0 0 90 225" fill={color} xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="150"/>
            <rect x="35" y="36" width="20" height="150"/>
            <rect x="70" y="75" width="20" height="150"/>
        </svg>
    );
}