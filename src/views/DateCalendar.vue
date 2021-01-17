<template>
	<v-row class="fill-height pa-5">
		<v-col>
			<v-sheet height="64">
				<v-toolbar
					flat
				>
					<v-btn
						outlined
						class="mr-4"
						color="grey darken-2"
						@click="setToday"
					>
						Today
					</v-btn>
					<v-btn
						fab
						text
						small
						color="grey darken-2"
						@click="prev"
					>
						<v-icon small>
							mdi-chevron-left
						</v-icon>
					</v-btn>
					<v-btn
						fab
						text
						small
						color="grey darken-2"
						@click="next"
					>
						<v-icon small>
							mdi-chevron-right
						</v-icon>
					</v-btn>
					<v-toolbar-title v-if="$refs.calendar">
						{{ $refs.calendar.title }}
					</v-toolbar-title>
					<v-spacer></v-spacer>
					<v-menu
						bottom
						right
					>
						<template v-slot:activator="{ on, attrs }">
							<v-btn
								outlined
								color="grey darken-2"
								v-bind="attrs"
								v-on="on"
							>
								<span>{{ typeToLabel[type] }}</span>
								<v-icon right>
									mdi-menu-down
								</v-icon>
							</v-btn>
						</template>
						<v-list>
							<v-list-item @click="type = 'day'">
								<v-list-item-title>Day</v-list-item-title>
							</v-list-item>
							<v-list-item @click="type = 'week'">
								<v-list-item-title>Week</v-list-item-title>
							</v-list-item>
							<v-list-item @click="type = 'month'">
								<v-list-item-title>Month</v-list-item-title>
							</v-list-item>
							<v-list-item @click="type = '4day'">
								<v-list-item-title>4 days</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu>
				</v-toolbar>
			</v-sheet>
			<v-sheet height="600">
				<v-calendar
					ref="calendar"
					v-model="focus"
					color="primary"
					:events="events"
					:event-color="getEventColor"
					:type="type"
					@click:event="showEvent"
					@click:more="viewDay"
					@click:date="viewDay"
					@change="updateRange"
				></v-calendar>
				<v-menu
					v-model="selectedOpen"
					:close-on-content-click="false"
					:activator="selectedElement"
					offset-x
				>
					<v-card
						color="grey lighten-4"
						min-width="350px"
						flat
					>
						<v-toolbar
							:color="selectedEvent.color"
							dark
						>
							<v-btn icon>
								<v-icon>mdi-pencil</v-icon>
							</v-btn>
							<v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
							<v-spacer></v-spacer>
							<v-btn icon>
								<v-icon>mdi-heart</v-icon>
							</v-btn>
							<v-btn icon>
								<v-icon>mdi-dots-vertical</v-icon>
							</v-btn>
						</v-toolbar>
						<v-card-text>
							<span v-html="'Start Time ' + selectedEvent.start"></span><br><br>
							<span v-html="selectedEvent.details"></span>
						</v-card-text>
						<v-card-actions>
							<v-btn
								text
								color="secondary"
								@click="selectedOpen = false"
							>
								Cancel
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-menu>
			</v-sheet>
		</v-col>
	</v-row>
</template>

<script>

class DateIdea {
	constructor(name, details, start) {
		this.name = name
		this.details = details
		this.start = start
		this.color = 'blue'
		this.timed = true
	}
}

	export default {
		data: () => ({
			focus: '',
			type: 'month',
			typeToLabel: {
				month: 'Month',
				week: 'Week',
				day: 'Day',
				'4day': '4 Days',
			},
			selectedEvent: {},
			selectedElement: null,
			selectedOpen: false,
			events: [],
		}),
		mounted () {
			this.$refs.calendar.checkChange()
		},
		methods: {
			viewDay ({ date }) {
				this.focus = date
				this.type = 'day'
			},
			getEventColor (event) {
				return event.color
			},
			setToday () {
				this.focus = ''
			},
			prev () {
				this.$refs.calendar.prev()
			},
			next () {
				this.$refs.calendar.next()
			},
			showEvent ({ nativeEvent, event }) {
				const open = () => {
					this.selectedEvent = event
					this.selectedElement = nativeEvent.target
					setTimeout(() => {
						this.selectedOpen = true
					}, 10)
				}

				if (this.selectedOpen) {
					this.selectedOpen = false
					setTimeout(open, 10)
				} else {
					open()
				}

				nativeEvent.stopPropagation()
			},
			updateRange ({ start, end }) {
				const events = []

				events.push(new DateIdea('Build a fort', 'Build a fort and watch movies',
																				new Date("January 1, 2021 19:30:00")))
				events.push(new DateIdea('Day Trip', 'Pack a picnic and do a day trip',
																				new Date("February 12, 2021 7:00:00")))
				events.push(new DateIdea('Day Trip', 'Pack a picnic and do a day trip',
																				new Date("February 13, 2021 7:00:00")))
				events.push(new DateIdea('Hike', 'Do a hike',
																				new Date("January 3, 2021 19:30:00")))
				events.push(new DateIdea('Movie Marathon', 'Movies to be decided',
																				new Date("January 4, 2021 19:30:00")))
				events.push(new DateIdea('Bake', 'Do a Bake off',
																				new Date("January 5, 2021 19:30:00")))
				events.push(new DateIdea('Stargaze', 'Watch the stars',
																				new Date("January 6, 2021 19:30:00")))
				events.push(new DateIdea('Bike Ride', 'Find a good place to go for a bike ride, maybe along the coast? orewa?',
																				new Date("January 7, 2021 19:30:00")))
				events.push(new DateIdea('Games Night', 'Play some games',
																				new Date("January 8, 2021 19:30:00")))
				events.push(new DateIdea('Watch a Show', 'Find a show or performance to go and see',
																				new Date("January 9, 2021 19:30:00")))
				events.push(new DateIdea('Putt Putt', 'Mini golf',
																				new Date("January 10, 2021 19:30:00")))
				events.push(new DateIdea('Markets', 'Go to one of the masrkets, Matakana, night markets etc... ',
																				new Date("January 23, 2021 7:00:00")))
				events.push(new DateIdea('Explore', 'Find a new Park',
																				new Date("January 12, 2021 19:30:00")))
				events.push(new DateIdea('Sunset', 'Go watch the sunset with a meal and do some sun gazing',
																				new Date("February 6, 2021 19:30:00")))
				events.push(new DateIdea('Quiz Night', 'Find some random quizzes',
																				new Date("January 14, 2021 19:30:00")))
				events.push(new DateIdea('Tree Adventures', 'Go do Tree adventures',
																				new Date("January 15, 2021 19:30:00")))
				events.push(new DateIdea('Painting Picnic', 'Briana need\'s to explain',
																				new Date("January 16, 2021 19:30:00")))

				this.events = events
			},
		},
	}
</script>