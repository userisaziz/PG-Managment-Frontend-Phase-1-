import React from 'react';
import { Wizard, useWizard } from 'react-use-wizard';
import { Button } from '../Common';
const NextPrevButton = () => {
	const { handleStep, previousStep, nextStep } = useWizard();
	return (
		<div className="PersonalDetails--StepButtons">
			<Button variant="secondary" onClick={() => previousStep()}>
				Previous
			</Button>
			<Button variant="primary" onClick={() => nextStep()}>
				Next
			</Button>
		</div>
	);
};

export default NextPrevButton;
