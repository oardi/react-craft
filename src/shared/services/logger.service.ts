export interface ILoggerService {
	log(...args: Array<any>): void;
	info(...args: Array<any>): void;
	warn(...args: Array<any>): void;
	debug(...args: Array<any>): void;
	error(...args: Array<any>): void;
}

export enum LogType { log = 'log', info = 'info', warn = 'warn', debug = 'debug', error = 'error' }

class LoggerService implements ILoggerService {
	logType = LogType;

	log(...args: Array<any>) {
		this._doLog(this.logType.log, args);
	}

	info(...args: Array<any>) {
		this._doLog(this.logType.info, args);
	}

	warn(...args: Array<any>) {
		this._doLog(this.logType.warn, args);
	}

	debug(...args: Array<any>) {
		this._doLog(this.logType.debug, args);

	}

	error(...args: Array<any>) {
		this._doLog(this.logType.error, args);
	}

	_doLog(logType: LogType, args: any) {
		switch (logType) {
			case this.logType.log:
				console.log.apply(console, args);
				break;
			case this.logType.info:
				console.info.apply(console, args);
				break;
			case this.logType.warn:
				console.warn.apply(console, args);
				break;
			case this.logType.debug:
				console.debug.apply(console, args);
				break;
			case this.logType.error:
				console.error.apply(console, args);
				break;
		}
	}
}

export const loggerService = new LoggerService();
