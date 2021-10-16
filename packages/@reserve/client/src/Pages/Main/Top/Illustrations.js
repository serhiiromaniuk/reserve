const styling = {
    backgroundImage: 'url(/images/illustration.svg)',
    backgroundSize: '880px auto',
    position: 'absolute',
    width: '880px',
    height: '896px',
    left: '770px',
    top: '75px'
}

export function Illustration() {
    return (
        <div style={styling}>
        </div>
    )
}

export function SearchIcon() {
    return (
        <div style={{margin: '10px'}}>
            <img src='/images/search_button.svg' width='28px' alt='search-icon'/>
        </div>
    )
}
