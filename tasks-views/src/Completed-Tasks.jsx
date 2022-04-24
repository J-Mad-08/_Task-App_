import React from 'react';
import Tasks from './Tasks';
import { useState } from 'react';

export default function CompletedTasks() {
	return (
		<div>
			Completed Tasks
			<Tasks />
		</div>
	);
}
