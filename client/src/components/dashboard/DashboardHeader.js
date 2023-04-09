
const DashboardHeader = ({className, setMode}) => {
    return (
        <div className={className}>
            <div onClick={() => setMode(0)}>
                Add Novel
            </div>
            
            <div onClick={() => setMode(1)}>
                Add Genre
            </div>
            <div onClick={() => setMode(2)}>
                Add Tag
            </div>
        </div>
    )
}

export default DashboardHeader