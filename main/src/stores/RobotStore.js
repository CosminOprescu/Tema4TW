class RobotStore {
    constructor() {
        this.robots = [{
            id: 1,
            type: 'worker',
            name: 'tim',
            mass: 1000
        }, {
            id: 2,
            type: 'worker',
            name: 'tom',
            mass: 1500
        }];
        this.emitter = new EventTarget();
    }

    addRobot(r) {
        let maxId = this.robots.map(e => e.id).reduce((a, e) => Math.max(a, e), 0);
        const newRobot = {
            id: maxId + 1,
            name: r.name || '',
            type: r.type || '',
            mass: r.mass || ''
        };
        this.robots.push(newRobot);
        this.emitter.dispatchEvent(new Event('UPDATE'));
    }

    getRobots() {
        return this.robots;
    }
}

const store = new RobotStore();

export default store;
