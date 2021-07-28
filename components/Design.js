import Image from 'next/image'
export default function Home() {
    return (
        <div style={{position:"absolute",top:0,left:0,opacity:.5}}>
            {/* <img srcSet="
            /images/design-mobile.svg 375w,
            /images/design-tablet.svg 768w,
            /images/design-desktop.svg 1440w"
            sizes="(min-width:1440px) 1440px,(min-width:768px) 768px, 375px"
            style={{width:"100%"}}/> */}
            {/* <Image src="/images/design-mobile.svg" width="375" height="2215" /> */}
            {/* <Image src="/images/design-tablet.svg" width="768" height="2128"/> */}
            <Image src="/images/design-desktop.svg" width="1440" height="1895"/>
        </div>
    )
}