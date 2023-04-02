function Star({ fill, id, isSmall}) {

    return(
        <span className='star_icon'>
            <svg xmlns='http://www.w3.org/2000/svg' width={isSmall ? "18" : "30"} height={isSmall ? "18" : "39"} viewBox='0 0 14 13' fill='#cacaca'>
                <clipPath id={`${id}StarClip`}>
                    <rect width={fill} height='39' />
                </clipPath>
                <path
                    id={`${id}Star`}
                    d='M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z'
                    transform='translate(-2 -2)'
                />
                <use clipPath={`url(#${id}StarClip)`} href={`#${id}Star`} fill='#FED402'
                />
            </svg>
        </span>
    )
    }

export default Star