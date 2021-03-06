<?php

namespace App\Exceptions;

use Doctrine\Instantiator\Exception\UnexpectedValueException;
use Exception;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use App\Exceptions\databaseError;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that should not be reported.
     *
     * @var array
     */
    protected $dontReport = [
        \Symfony\Component\HttpKernel\Exception\HttpException::class,
    ];

    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception  $e
     * @return void
     */
    public function report(Exception $e)
    {
        return parent::report($e);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $e
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $e)
    {
        $class_name=get_class($e);


        switch ($class_name){
            case "UnexpectedValueException":
            case "Firebase\\JWT\\SignatureInvalidException":
                return response()->json(["type"=>"false","message"=>"无效的token","code"=>"40002"]);
                break;
            case "ErrorException":
            /*case "DomainException":
                return response()->json(["type"=>"false","message"=>"程序异常".$e->getMessage(),"code"=>"40008"]);*/
                break;
        }


        //用户登录错误处理

        if($e instanceof QueryException){
            return databaseError::send($e);
        }

        return parent::render($request, $e);
    }
}
