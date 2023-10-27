test:
	echo 'Inside prod';
	echo ${PORT}

api:
	echo ${PORT}
	opentelemetry-bootstrap --action=install
	opentelemetry-instrument uvicorn api:app --host 0.0.0.0 --port ${PORT};
	
dev:
	uvicorn api:app --host 0.0.0.0 --port 8080 --reload;
