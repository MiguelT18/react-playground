import { useState, useEffect, useRef } from "react"
import styles from "./counter.module.css"

export default function Counter() {
	const [counter, setCounter] = useState(0)

	const intervalRef = useRef(0)
	const timeoutRef = useRef(0)

	const handleIncrease = () => {
		setCounter((prev) => prev + 1)
	}

	const handleDecrease = () => {
		setCounter((prev) => prev - 1)
	}

	const handleReset = () => {
		setCounter(0)
	}

	const startHold = (action: () => void) => {
		action()

		timeoutRef.current = setTimeout(() => {
			intervalRef.current = setInterval(() => {
				action()
			}, 10)
		}, 500)
	}

	const stopHold = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current)
			intervalRef.current = 0
		}
		if (timeoutRef.current) {
			clearInterval(timeoutRef.current)
			timeoutRef.current = 0
		}
	}

	useEffect(() => {
		return () => {
			stopHold()
		}
	}, [])

	return (
		<div className={styles.counterContainer}>
			<h2 className={styles.counterTitle}>Counter Component</h2>

			<span className={styles.counter}>{counter}</span>

			<div className={styles.counterControls}>
				<div className={styles.counterButtonsContainer}>
					<button onMouseDown={() => startHold(handleDecrease)} onMouseUp={stopHold} onMouseLeave={stopHold} type="button">-</button>
					<button onClick={handleReset} type="button">Reset</button>
					<button onMouseDown={() => startHold(handleIncrease)} onMouseUp={stopHold} onMouseLeave={stopHold} type="button">+</button>
				</div>
				<span className={styles.counterLabel}>
					Increase or decrease the number to see what happen!
				</span>
			</div>
		</div>
	)
}