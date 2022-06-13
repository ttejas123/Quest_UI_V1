import './style.css'
import icon15 from '../../assets/icon15.png'
import icon16 from '../../assets/icon16.png'
import icon17 from '../../assets/icon17.png'
import icon18 from '../../assets/icon18.png'
const Cardwith = (props) => {
	return(
		<div className="flex flex-col px-[3%]">
		<div className={`${props.color} cursor-pointer rounded-2xl border-[3.5px] ${props.border} border-black flex items-center justify-center h-[9rem] relative`}>
			
			{props.data ? (<div className="font-extrabold text-white outlines-title1 text-2xl">{props.data}</div>) : (<>
					<div style={props.data ? {display: 'none'} : {display: 'block'}} className={`absolute top-0 ${props.name == "Mystic" ? ("bg-black") : ("bg-white")} rounded-tl-xl rounded-br-xl px-1 ${props.name == "Mystic" ? ("text-white") : ("text-black")} text-sm font-bold left-0 pr-2`}>{props.name} </div>
					<img src={props.img} className='rounded-xl h-full w-full' />
				</>
				)
			}

		</div> 
		{props.data ? (<></>) : (<>
			<div className="flex justify-center text-[17px]"><div className="font-extrabold text-white outlines-title1">Fox</div></div>
				<div className="flex  justify-between items-center w-full">
					<img src={icon15} className="h-auto w-[35%]" />
				<div className=" ml-2 text-white basis-5/6 h-7 justify-center font-bold bg-[#552e00] rounded-md font-sans flex items-center text-sm ">+5</div>
			</div>
		</>)}

		</div>
	);
}

export default Cardwith;


// const Cardwith = (props) => {
// 	return(
// 		<div onClick={() => props.setFox(!props.Fox)} className="bg-orange-900 rounded-xl border-2 border-black flex cursor-pointer items-center justify-center w-26 h-30 relative">
// 			<div style={props.visibility ? {display: 'block'} : {display: 'none'}} className='absolute top-0 bg-white rounded-tl-xl rounded-br-xl px-1 text-black text-sm font-bold left-0 '>{props.name} </div>
// 			<img src={props.img} className='w-full rounded-xl' />
// 		</div>
// 	);
// }

// export default Cardwith;