package tech.geocodeapp.geocode.event.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.media.Schema;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import tech.geocodeapp.geocode.event.response.*;
import tech.geocodeapp.geocode.event.request.*;

import javax.validation.Valid;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2021-07-07T10:35:03.795Z[GMT]")
@RestController
public class EventApiController implements EventApi {

    private static final Logger log = LoggerFactory.getLogger( EventApiController.class );

    private final ObjectMapper objectMapper;

    private final HttpServletRequest request;

    @org.springframework.beans.factory.annotation.Autowired
    public EventApiController( ObjectMapper objectMapper, HttpServletRequest request ) {

        this.objectMapper = objectMapper;
        this.request = request;
    }

    public ResponseEntity< ChangeAvailabilityResponse > changeAvailability( @Parameter( in = ParameterIn.DEFAULT, description = "Request to update the availability of an Event", required = true, schema = @Schema() ) @Valid @RequestBody ChangeAvailabilityRequest body ) {

        String accept = request.getHeader( "Accept" );
        if ( accept != null && accept.contains( "application/json" ) ) {
            try {
                return new ResponseEntity< ChangeAvailabilityResponse >( objectMapper.readValue( "{\n  \"success\" : true\n}", ChangeAvailabilityResponse.class ), HttpStatus.NOT_IMPLEMENTED );
            } catch ( IOException e ) {
                log.error( "Couldn't serialize response for content type application/json", e );
                return new ResponseEntity< ChangeAvailabilityResponse >( HttpStatus.INTERNAL_SERVER_ERROR );
            }
        }

        return new ResponseEntity< ChangeAvailabilityResponse >( HttpStatus.NOT_IMPLEMENTED );
    }

    public ResponseEntity< CreateEventResponse > createEvent( @Parameter( in = ParameterIn.DEFAULT, description = "Request to create an Event", required = true, schema = @Schema() ) @Valid @RequestBody CreateEventRequest body ) {

        String accept = request.getHeader( "Accept" );
        if ( accept != null && accept.contains( "application/json" ) ) {
            try {
                return new ResponseEntity< CreateEventResponse >( objectMapper.readValue( "{\n  \"success\" : true\n}", CreateEventResponse.class ), HttpStatus.NOT_IMPLEMENTED );
            } catch ( IOException e ) {
                log.error( "Couldn't serialize response for content type application/json", e );
                return new ResponseEntity< CreateEventResponse >( HttpStatus.INTERNAL_SERVER_ERROR );
            }
        }

        return new ResponseEntity< CreateEventResponse >( HttpStatus.NOT_IMPLEMENTED );
    }

    public ResponseEntity< CreateLeaderboardResponse > createLeaderBoard( @Parameter( in = ParameterIn.DEFAULT, description = "Request to create a new Leaderboard for an Event", required = true, schema = @Schema() ) @Valid @RequestBody CreateLeaderboardRequest body ) {

        String accept = request.getHeader( "Accept" );
        if ( accept != null && accept.contains( "application/json" ) ) {
            try {
                return new ResponseEntity< CreateLeaderboardResponse >( objectMapper.readValue( "{\n  \"success\" : true\n}", CreateLeaderboardResponse.class ), HttpStatus.NOT_IMPLEMENTED );
            } catch ( IOException e ) {
                log.error( "Couldn't serialize response for content type application/json", e );
                return new ResponseEntity< CreateLeaderboardResponse >( HttpStatus.INTERNAL_SERVER_ERROR );
            }
        }

        return new ResponseEntity< CreateLeaderboardResponse >( HttpStatus.NOT_IMPLEMENTED );
    }

    public ResponseEntity< CreatePointResponse > createPoint( @Parameter( in = ParameterIn.DEFAULT, description = "Request to create a new Point for an Event", required = true, schema = @Schema() ) @Valid @RequestBody CreatePointRequest body ) {

        String accept = request.getHeader( "Accept" );
        if ( accept != null && accept.contains( "application/json" ) ) {
            try {
                return new ResponseEntity< CreatePointResponse >( objectMapper.readValue( "{\n  \"points\" : [ {\n    \"leaderBoard\" : {\n      \"name\" : \"name\",\n      \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\",\n      \"event\" : {\n        \"name\" : \"name\",\n        \"description\" : \"description\",\n        \"location\" : {\n          \"latitude\" : 25.7545,\n          \"longitude\" : 28.2314\n        },\n        \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\"\n      }\n    },\n    \"amount\" : 0,\n    \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\"\n  }, {\n    \"leaderBoard\" : {\n      \"name\" : \"name\",\n      \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\",\n      \"event\" : {\n        \"name\" : \"name\",\n        \"description\" : \"description\",\n        \"location\" : {\n          \"latitude\" : 25.7545,\n          \"longitude\" : 28.2314\n        },\n        \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\"\n      }\n    },\n    \"amount\" : 0,\n    \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\"\n  } ]\n}", CreatePointResponse.class ), HttpStatus.NOT_IMPLEMENTED );
            } catch ( IOException e ) {
                log.error( "Couldn't serialize response for content type application/json", e );
                return new ResponseEntity< CreatePointResponse >( HttpStatus.INTERNAL_SERVER_ERROR );
            }
        }

        return new ResponseEntity< CreatePointResponse >( HttpStatus.NOT_IMPLEMENTED );
    }

    public ResponseEntity< CreateTimeTrialResponse > createTimeTrial( @Parameter( in = ParameterIn.DEFAULT, description = "Request to create a new Time Trial for an Event", required = true, schema = @Schema() ) @Valid @RequestBody CreateTimeTrialRequest body ) {

        String accept = request.getHeader( "Accept" );
        if ( accept != null && accept.contains( "application/json" ) ) {
            try {
                return new ResponseEntity< CreateTimeTrialResponse >( objectMapper.readValue( "{\n  \"timeTrial\" : [ {\n    \"timeLimit\" : 0.8008281904610115\n  }, {\n    \"timeLimit\" : 0.8008281904610115\n  } ]\n}", CreateTimeTrialResponse.class ), HttpStatus.NOT_IMPLEMENTED );
            } catch ( IOException e ) {
                log.error( "Couldn't serialize response for content type application/json", e );
                return new ResponseEntity< CreateTimeTrialResponse >( HttpStatus.INTERNAL_SERVER_ERROR );
            }
        }

        return new ResponseEntity< CreateTimeTrialResponse >( HttpStatus.NOT_IMPLEMENTED );
    }

    public ResponseEntity< GetAllEventsResponse > getAllEvents() {

        String accept = request.getHeader( "Accept" );
        if ( accept != null && accept.contains( "application/json" ) ) {
            try {
                return new ResponseEntity< GetAllEventsResponse >( objectMapper.readValue( "{\n  \"events\" : [ {\n    \"name\" : \"name\",\n    \"description\" : \"description\",\n    \"location\" : {\n      \"latitude\" : 25.7545,\n      \"longitude\" : 28.2314\n    },\n    \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\"\n  }, {\n    \"name\" : \"name\",\n    \"description\" : \"description\",\n    \"location\" : {\n      \"latitude\" : 25.7545,\n      \"longitude\" : 28.2314\n    },\n    \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\"\n  } ]\n}", GetAllEventsResponse.class ), HttpStatus.NOT_IMPLEMENTED );
            } catch ( IOException e ) {
                log.error( "Couldn't serialize response for content type application/json", e );
                return new ResponseEntity< GetAllEventsResponse >( HttpStatus.INTERNAL_SERVER_ERROR );
            }
        }

        return new ResponseEntity< GetAllEventsResponse >( HttpStatus.NOT_IMPLEMENTED );
    }

    public ResponseEntity< GetEventsByLocationResponse > getEventsByLocation( @Parameter( in = ParameterIn.DEFAULT, description = "Request to get an Event by its location", required = true, schema = @Schema() ) @Valid @RequestBody GetEventsByLocationRequest body ) {

        String accept = request.getHeader( "Accept" );
        if ( accept != null && accept.contains( "application/json" ) ) {
            try {
                return new ResponseEntity< GetEventsByLocationResponse >( objectMapper.readValue( "{\n  \"events\" : [ {\n    \"name\" : \"name\",\n    \"description\" : \"description\",\n    \"location\" : {\n      \"latitude\" : 25.7545,\n      \"longitude\" : 28.2314\n    },\n    \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\"\n  }, {\n    \"name\" : \"name\",\n    \"description\" : \"description\",\n    \"location\" : {\n      \"latitude\" : 25.7545,\n      \"longitude\" : 28.2314\n    },\n    \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\"\n  } ]\n}", GetEventsByLocationResponse.class ), HttpStatus.NOT_IMPLEMENTED );
            } catch ( IOException e ) {
                log.error( "Couldn't serialize response for content type application/json", e );
                return new ResponseEntity< GetEventsByLocationResponse >( HttpStatus.INTERNAL_SERVER_ERROR );
            }
        }

        return new ResponseEntity< GetEventsByLocationResponse >( HttpStatus.NOT_IMPLEMENTED );
    }

    public ResponseEntity< GetLeaderBoardByTimeTrialResponse > getLeaderBoardByTimeTrial( @Parameter( in = ParameterIn.DEFAULT, description = "Request to get the Leaderboard for a TimeTrial", required = true, schema = @Schema() ) @Valid @RequestBody GetLeaderBoardByTimeTrialRequest body ) {

        String accept = request.getHeader( "Accept" );
        if ( accept != null && accept.contains( "application/json" ) ) {
            try {
                return new ResponseEntity< GetLeaderBoardByTimeTrialResponse >( objectMapper.readValue( "{\n  \"leaderboard\" : [ {\n    \"name\" : \"name\",\n    \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\",\n    \"event\" : {\n      \"name\" : \"name\",\n      \"description\" : \"description\",\n      \"location\" : {\n        \"latitude\" : 25.7545,\n        \"longitude\" : 28.2314\n      },\n      \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\"\n    }\n  }, {\n    \"name\" : \"name\",\n    \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\",\n    \"event\" : {\n      \"name\" : \"name\",\n      \"description\" : \"description\",\n      \"location\" : {\n        \"latitude\" : 25.7545,\n        \"longitude\" : 28.2314\n      },\n      \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\"\n    }\n  } ]\n}", GetLeaderBoardByTimeTrialResponse.class ), HttpStatus.NOT_IMPLEMENTED );
            } catch ( IOException e ) {
                log.error( "Couldn't serialize response for content type application/json", e );
                return new ResponseEntity< GetLeaderBoardByTimeTrialResponse >( HttpStatus.INTERNAL_SERVER_ERROR );
            }
        }

        return new ResponseEntity< GetLeaderBoardByTimeTrialResponse >( HttpStatus.NOT_IMPLEMENTED );
    }

    public ResponseEntity< GetPointsResponse > getPoints() {

        String accept = request.getHeader( "Accept" );
        if ( accept != null && accept.contains( "application/json" ) ) {
            try {
                return new ResponseEntity< GetPointsResponse >( objectMapper.readValue( "{\n  \"points\" : [ {\n    \"leaderBoard\" : {\n      \"name\" : \"name\",\n      \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\",\n      \"event\" : {\n        \"name\" : \"name\",\n        \"description\" : \"description\",\n        \"location\" : {\n          \"latitude\" : 25.7545,\n          \"longitude\" : 28.2314\n        },\n        \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\"\n      }\n    },\n    \"amount\" : 0,\n    \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\"\n  }, {\n    \"leaderBoard\" : {\n      \"name\" : \"name\",\n      \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\",\n      \"event\" : {\n        \"name\" : \"name\",\n        \"description\" : \"description\",\n        \"location\" : {\n          \"latitude\" : 25.7545,\n          \"longitude\" : 28.2314\n        },\n        \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\"\n      }\n    },\n    \"amount\" : 0,\n    \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\"\n  } ]\n}", GetPointsResponse.class ), HttpStatus.NOT_IMPLEMENTED );
            } catch ( IOException e ) {
                log.error( "Couldn't serialize response for content type application/json", e );
                return new ResponseEntity< GetPointsResponse >( HttpStatus.INTERNAL_SERVER_ERROR );
            }
        }

        return new ResponseEntity< GetPointsResponse >( HttpStatus.NOT_IMPLEMENTED );
    }

    public ResponseEntity< GetPointsByLeaderBoardResponse > getPointsByLeaderBoard( @Parameter( in = ParameterIn.DEFAULT, description = "Request to get Points for a Leaderboard of the specified Event", required = true, schema = @Schema() ) @Valid @RequestBody GetPointsByLeaderBoardRequest body ) {

        String accept = request.getHeader( "Accept" );
        if ( accept != null && accept.contains( "application/json" ) ) {
            try {
                return new ResponseEntity< GetPointsByLeaderBoardResponse >( objectMapper.readValue( "{\n  \"points\" : [ {\n    \"leaderBoard\" : {\n      \"name\" : \"name\",\n      \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\",\n      \"event\" : {\n        \"name\" : \"name\",\n        \"description\" : \"description\",\n        \"location\" : {\n          \"latitude\" : 25.7545,\n          \"longitude\" : 28.2314\n        },\n        \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\"\n      }\n    },\n    \"amount\" : 0,\n    \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\"\n  }, {\n    \"leaderBoard\" : {\n      \"name\" : \"name\",\n      \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\",\n      \"event\" : {\n        \"name\" : \"name\",\n        \"description\" : \"description\",\n        \"location\" : {\n          \"latitude\" : 25.7545,\n          \"longitude\" : 28.2314\n        },\n        \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\"\n      }\n    },\n    \"amount\" : 0,\n    \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\"\n  } ]\n}", GetPointsByLeaderBoardResponse.class ), HttpStatus.NOT_IMPLEMENTED );
            } catch ( IOException e ) {
                log.error( "Couldn't serialize response for content type application/json", e );
                return new ResponseEntity< GetPointsByLeaderBoardResponse >( HttpStatus.INTERNAL_SERVER_ERROR );
            }
        }

        return new ResponseEntity< GetPointsByLeaderBoardResponse >( HttpStatus.NOT_IMPLEMENTED );
    }

    public ResponseEntity< GetPointsByUserResponse > getPointsByUser( @Parameter( in = ParameterIn.DEFAULT, description = "Request to get the Points for an Event", required = true, schema = @Schema() ) @Valid @RequestBody GetPointsByUserRequest body ) {

        String accept = request.getHeader( "Accept" );
        if ( accept != null && accept.contains( "application/json" ) ) {
            try {
                return new ResponseEntity< GetPointsByUserResponse >( objectMapper.readValue( "{\n  \"points\" : [ {\n    \"leaderBoard\" : {\n      \"name\" : \"name\",\n      \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\",\n      \"event\" : {\n        \"name\" : \"name\",\n        \"description\" : \"description\",\n        \"location\" : {\n          \"latitude\" : 25.7545,\n          \"longitude\" : 28.2314\n        },\n        \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\"\n      }\n    },\n    \"amount\" : 0,\n    \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\"\n  }, {\n    \"leaderBoard\" : {\n      \"name\" : \"name\",\n      \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\",\n      \"event\" : {\n        \"name\" : \"name\",\n        \"description\" : \"description\",\n        \"location\" : {\n          \"latitude\" : 25.7545,\n          \"longitude\" : 28.2314\n        },\n        \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\"\n      }\n    },\n    \"amount\" : 0,\n    \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\"\n  } ]\n}", GetPointsByUserResponse.class ), HttpStatus.NOT_IMPLEMENTED );
            } catch ( IOException e ) {
                log.error( "Couldn't serialize response for content type application/json", e );
                return new ResponseEntity< GetPointsByUserResponse >( HttpStatus.INTERNAL_SERVER_ERROR );
            }
        }

        return new ResponseEntity< GetPointsByUserResponse >( HttpStatus.NOT_IMPLEMENTED );
    }

}
