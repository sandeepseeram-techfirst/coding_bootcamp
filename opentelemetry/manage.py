import uptrace
from opentelemetry import trace

# copy your project DSN here or use UPTRACE_DSN env var
uptrace.configure_opentelemetry(
  dsn="https://<token>@uptrace.dev/<project_id>",
  service_name="myservice",
  service_version="1.0.0",
  deployment_environment="production",
)

tracer = trace.get_tracer("app_or_package_name", "1.0.0")

'''
 
dsn	- A data source that is used to connect to uptrace.dev. For example, https://<token>@uptrace.dev/<project_id>.
service_name -	service.name resource attribute. For example, myservice.
service_version	- service.version resource attribute. For example, 1.0.0.
deployment_environment	- deployment.environment resource attribute. For example, production.
resource_attributes	- Any other resource attributes.
resource - Resource contains attributes representing an entity that produces telemetry. Resource attributes are copied to all spans and events.

'''