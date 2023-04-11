import PropTypes from "prop-types";
import css from "./Statistics.module.css"

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const liStyles = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	width:"calc((100% - 10px * 5) / 5)",
	padding: "5px",
}; 


export const Statistics = ({title, stats}) => {
	return (
		<section className={css.statistics}>
			{title && <h2 className={css.title}>{title}</h2>}
			<ul className={css.statList}>
				{stats.map(({id, label, percentage}) => {
					return <li key={id} style={{...liStyles, backgroundColor: getRandomHexColor()}}>
						<span className="label">{label}</span>
						<span className="percentage">{percentage}%</span>
                        </li>}
				)}
		    </ul>
		</section>
	)
}

Statistics.propTypes = {
	title: PropTypes.string,
	stats: PropTypes.arrayOf(PropTypes.exact({
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	percentage: PropTypes.number.isRequired
	}, ),
	)
}